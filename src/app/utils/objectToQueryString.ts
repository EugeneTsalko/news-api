const objectToQueryString = (obj: { [key: string]: unknown }) => {
  const keys = Object.keys(obj);
  const keyValuePairs = keys.map((key) => `${key}=${obj[key]}`);

  return keyValuePairs.join('&');
};

export default objectToQueryString;
