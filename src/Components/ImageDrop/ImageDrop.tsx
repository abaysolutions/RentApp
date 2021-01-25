import React, { useEffect, useState, CSSProperties } from "react";
import { useDropzone } from "react-dropzone";
import { FormFields } from "../../Types/FormTypes";

const thumbsContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: CSSProperties = {
  display: "block",
  width: "auto",
  height: "100%",
};
const dropzoneStyle: CSSProperties = {
  width: "100%",
  height: "auto",
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
};

interface IImageDropProps {
  values: FormFields;
  setFieldValue: any;
}

const ImageDrop = (props: IImageDropProps) => {
  const [files, setFiles]: any = useState([]);
  const { values, setFieldValue } = props;
  const thumbs = values.imageFiles.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img alt="preview thumb" src={file.preview} style={img} />
      </div>
    </div>
  ));
  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFieldValue("imageFiles", values.imageFiles.concat(acceptedFiles));
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <section className="container">
      <div style={dropzoneStyle} {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here </p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export { ImageDrop };
