export const getPrevPath = (): string => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return null;
  const prevPath = storage.getItem("prevPath");
  if (!prevPath) return null;

  return prevPath;
};
