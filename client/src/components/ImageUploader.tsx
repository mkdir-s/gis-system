import { useState, useRef } from "react";

export const ImageUploader = ({ onImageUpload }: { onImageUpload: (file: File) => void }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="uploader-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden-input"
      />
      
      {preview ? (
        <div className="preview-wrapper">
          <img src={preview} alt="Preview" className="image-preview" />
          <button onClick={handleClick} className="change-button">
            Изменить фото
          </button>
        </div>
      ) : (
        <div onClick={handleClick} className="upload-placeholder">
          <span>+ Загрузить изображение</span>
          <p>Перетащите сюда файл или кликните</p>
        </div>
      )}
    </div>
  );
};