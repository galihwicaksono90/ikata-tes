import imageCompression from "browser-image-compression";

export interface Options {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  maxIteration?: number;
  exifOrientation?: number;
  onProgress?: (progress: number) => void;
  fileType?: string;
  initialQuality?: number;
  alwaysKeepResolution?: boolean;
  signal?: AbortSignal;
}

const defaultOptions: Options = {
  maxSizeMB: 1.8,
  useWebWorker: true,
};

type CompressImageProps = ({ file: File, options: Options }) => Promise<File>;

export const compressImage: CompressImageProps = async ({ file, options }) => {
  try {
    const output = await imageCompression(file, {
      ...defaultOptions,
      ...options,
    });
    return new File([output], output.name, {
      lastModified: output.lastModified,
      type: file.type,
    });
  } catch (e) {
    console.log({ error: e });
    throw e;
  }
};
