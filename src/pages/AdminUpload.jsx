import { useState } from "react";
import { uploadImage } from "../firebase/uploadImage";

function AdminUpload() {
  const [file, setFile] = useState(null);
  const [event, setEvent] = useState("wedding");
  const [loading, setLoading] = useState(false);

  const events = [
    "wedding",
    "prewedding",
    "birthday",
    "haldi",
    "mehendi",
    "sangeet",
  ];

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    // send event also
    await uploadImage(file, event);

    setLoading(false);
    alert("Uploaded Successfully!");

    setFile(null);
  };

  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-bold mb-4">Upload Event Images</h1>

      {/* Event Select */}
      <select
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        {events.map((ev) => (
          <option key={ev} value={ev}>
            {ev}
          </option>
        ))}
      </select>

      {/* File Input */}
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3"
      />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 py-2 w-full"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default AdminUpload;
