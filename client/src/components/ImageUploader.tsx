import React, { useState } from "react";

const ImageUploader = ({
  onImageUpload,
}: {
  onImageUpload: (file: File) => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };


  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && <img src={preview} alt="preview" width={200} />}
    </div>
  );
};

export default ImageUploader;
