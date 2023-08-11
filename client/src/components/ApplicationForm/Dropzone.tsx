import { useCallback, useState, Dispatch, SetStateAction } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

type DropzoneProps = {
  className: string;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

export default function Dropzone({ className, setFile }: DropzoneProps) {
  const [preview, setPreview] = useState('');
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const newFile = new FileReader();

      if (acceptedFiles[0]) {
        newFile.onload = () => {
          setFile(acceptedFiles[0]);
          setPreview(acceptedFiles[0].path as string);
        };
      }

      newFile.readAsDataURL(acceptedFiles[0]);
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps({
          className: className,
        })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop your resume here...</p>
        ) : (
          <p>Drag and drop your resume here, or click to select files.</p>
        )}
      </div>
      {preview}
    </>
  );
}
