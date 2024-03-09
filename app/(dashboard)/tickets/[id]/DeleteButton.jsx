"use client"
import { useState } from "react";
import { TiDelete } from "react-icons/ti";


const DeleteButton = ({ id }) => {
const [isLoading, setIsLoading ] = useState(false);

const handleDelete = async () => {
  setIsLoading(true)

  console.log(`Deleting ticket ${id}`);

};

  return (
    <button 
      className="btn-primary" 
      onClick = {handleDelete} 
      disabled = {isLoading}>
      
      {isLoading && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete/>
          Delete Ticket
        </>
      )}
    </button>
  );
}

export default DeleteButton;