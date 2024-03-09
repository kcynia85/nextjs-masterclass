"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

import { TiDelete } from "react-icons/ti";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error('Failed to delete ticket'); 
      }
      
      router.push('/tickets');
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button 
      className="btn-primary"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? (
        <>
          <TiDelete /> Deleting...
        </>
      ) : (
        <>
          <TiDelete /> Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteButton;