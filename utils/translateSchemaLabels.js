export function translateSchemaLabels(schema, t) {
  return schema.map((field) => ({
    ...field,
    label: t(field.label),
  }));
}
