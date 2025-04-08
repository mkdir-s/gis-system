import { useState } from "react";
import {ImageUploader} from "./components/ImageUploader";
import AddressInput from "./components/AddressInput";
import SubmitButton from "./components/SubmitButton";
import {YandexMap} from "./components/YandexMap";

export default function App() {
  const [image, setImage] = useState<File | null>(null);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<[number, number]>([43.24, 76.91]);

  const handleSubmit = async () => {
    if (!image || !address) return;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("address", address);

    try {
      // const coords = await uploadPhoto(formData);
      setCoordinates([1, 1]);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    }
  };

  return (
    <div className="hero">
      <h1 className="hero__title">ГИС система</h1>
      <ImageUploader onImageUpload={setImage} />
      <AddressInput value={address} onChange={setAddress} />
      <SubmitButton onClick={handleSubmit} />
      <YandexMap center={coordinates} />
    </div>
  );
}