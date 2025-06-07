export const HttpMethodEnum = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
} as const;

export type HttpMethodEnum = typeof HttpMethodEnum[keyof typeof HttpMethodEnum];

export const httpMethodName = (httpMethod: HttpMethodEnum) => {
  switch (httpMethod) {
    case HttpMethodEnum.Get:
      return "GET";
    case HttpMethodEnum.Post:
      return "POST";
    case HttpMethodEnum.Put:
      return "PUT";
    case HttpMethodEnum.Delete:
      return "DELETE";
    case HttpMethodEnum.Patch:
      return "PATCH";
    default:
      return undefined;
  }
};