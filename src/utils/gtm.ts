export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const GTM_ID_2 = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_2;

export const pageview = (url) => {
  //@ts-ignore
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
