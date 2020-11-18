// export const envIsProduction = process.env.NODE_ENV === 'production';

export const isWXWork = ctx => {
  const ua = ctx.request.get('User-Agent').toLowerCase();
  return ua.indexOf('micromessenger') >= 0 && ua.indexOf('wxwork') >= 0;
};

// export const getRequestURLBase = ctx => {
//   const host = ctx.request.get('host');
//   const protocol = ctx.request.get('x-ssl-header') || ctx.request.protocol;
//   return `${protocol}://${host}`;
// };
