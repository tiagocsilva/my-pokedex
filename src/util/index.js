const capitalize = (value) => {
  if (!value) return '';
  const textValue = value.toString();
  return textValue.charAt(0).toUpperCase() + textValue.slice(1);
};

export default { capitalize };
