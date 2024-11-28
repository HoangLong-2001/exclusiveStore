const queryString = (params) =>
  Object.keys(params)
    .map(function (key) {
      if (key === 'tags' ||key === 'sizes'||key === 'colors')
        return (
          "filter=" +
          JSON.stringify({
            [key]: {
              $in: params[key],
            },
          })
        );

      return key + "=" + params[key];
    })
    .join("&");
export default queryString;
