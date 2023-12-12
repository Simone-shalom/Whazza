import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ImageIcon, TrashIcon } from "lucide-react"; // Assuming you have a TrashIcon component

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    },
    [onChange]
  );

  const handleDelete = () => {
    onChange(""); // Clear the image source
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, disabled });

  return (
    <div
      {...getRootProps()}
      className="space-y-4 w-full flex flex-col justify-center items-center"
    >
      <input {...getInputProps()} />
      {value ? (
        <div className="relative w-60 h-60 flex flex-col space-y-0 items-center justify-center">
          <Image
            alt="Upload"
            className="rounded-md object-cover"
            fill
            src={value}
          />
          {!disabled && (
            <button
              onClick={handleDelete}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full cursor-pointer focus:outline-none"
            >
              <TrashIcon size={18} />
            </button>
          )}
        </div>
      ) : (
        <div className="p-1 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center">
          <ImageIcon size={50} />
          <p>Add Image</p>
        </div>
      )}
    </div>
  );
};
