export function formatBytes(bytes: number, decimals: number = 2): number {
  if (bytes === 0) return 0;

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return bytes / Math.pow(k, i);
}

export function bytesToMb(bytes: number) {
  if (bytes === 0) return 0;
  return bytes / 1024 ** 2;
}

export function formatBytesAsString(
  bytes: number,
  decimals: number = 2
): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
