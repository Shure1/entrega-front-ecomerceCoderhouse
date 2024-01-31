import { useState, useEffect } from "react";

const SendDocument=() => {
 const [file, setFile] = useState(null);
 const [type, setType] = useState('document'); // Cambia esto según el tipo de archivo que estés subiendo

 const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    
 };
 useEffect(() => {
    console.log(`el archivo imagen es el siguiente ${file}`, file);
 }, [file]);

 const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('documents', file);
      
      
      console.log('FormData:', formData);
  
      const response = await fetch('http://localhost:4000/api/users/65b7d6860c944dcdefc7dcb2/documents', {
        method: 'POST',
        body: formData
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        alert('Archivo subido correctamente');
      } else {
        alert('Hubo un error al subir el archivo');
      }
    } catch (error) {
      console.error('Error en la carga:', error);
    }
  };
  

 return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <select onChange={(e) => setType(e.target.value)}>
        <option value="document">Documento</option>
        <option value="profile">Perfil</option>
        <option value="product">Producto</option>
      </select>
      <button onClick={handleUpload}>Subir archivo</button>
    </div>
 );
}

export default SendDocument;
