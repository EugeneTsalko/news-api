const objectToQueryString = (obj: Record<string, string>) => {
  if (!Object.keys(obj).length) return '';

  const keyValuePairs = Object.entries(obj)
    .map((el) => el.join('='))
    .join('&');

  return `&${keyValuePairs}`;
};

export default objectToQueryString;
