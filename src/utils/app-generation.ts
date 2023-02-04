interface ComponentDefinition {
  component: string;
  loopThroughProperty?: string;
  attributes?: {[name: string]: string};
  properties?: {[name: string]: unknown};
  dataSource?: string;
  children?: ComponentDefinition[] | string;
}

export interface AppDefinition {
  root: ComponentDefinition;
}

export async function generate(
  config: AppDefinition,
  appendTo: Node = document.body
) {
  console.log(config);
  await render(config.root, undefined, appendTo);
}

async function render(
  component: ComponentDefinition,
  parentData: unknown,
  appendTo: Node
) {
  const {
    component: tagName,
    attributes,
    properties,
    dataSource,
    children,
  } = component;
  const element = document.createElement(tagName);
  const data = {
    data: await fetchJSON(dataSource ?? ''),
    parentData,
  };
  Object.entries(attributes ?? {}).forEach(([key, value]) =>
    element.setAttribute(
      key,
      value.replace(/\$\$(.*)\$\$/g, (expression) =>
        transformDataExpression(expression, data)?.toString()
      )
    )
  );
  Object.assign(
    element,
    Object.fromEntries(
      Object.entries(properties ?? {}).map(([key, value]) => {
        let processedValue = value;
        if (typeof value === 'string') {
          if (value.match(/\$\$(.*)\$\$/g)?.[0]?.length === value.length) {
            processedValue = transformDataExpression(value, data);
          } else {
            processedValue = value.replace(/\$\$(.*)\$\$/g, (expression) =>
              transformDataExpression(expression, data)?.toString()
            );
          }
        }
        return [key, processedValue];
      })
    )
  );
  if (typeof children === 'string') {
    element.innerHTML = children.replace(/\$\$([\w-.]*)\$\$/g, (expression) =>
      transformDataExpression(
        expression.match(/\$\$([\w-.]*)\$\$/)?.[1] ?? '',
        data
      )?.toString()
    );
  } else if (Array.isArray(children)) {
    for (const child of children) {
      if (child?.component) {
        await render(child, data, element);
      }
    }
  }
  appendTo.appendChild(element);
}

function transformDataExpression(
  expression: string,
  data: {[key: string]: unknown}
) {
  const propertyNames = expression.split('.');
  let currentData = data;
  propertyNames.forEach(
    (propertyName) =>
      (currentData = currentData?.[propertyName] as {[key: string]: unknown})
  );
  return currentData;
}

async function fetchJSON(url: string) {
  if (url) {
    return await fetch(url).then((response) =>
      response.ok ? response.json() : undefined
    );
  }
}
