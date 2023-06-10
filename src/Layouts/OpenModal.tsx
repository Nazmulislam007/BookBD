import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  height: { md: "auto", xs: "90vh" },
  overflow: "auto",
};

type OpenModalType = {
  children: React.ReactNode;
};

export default function OpenModal({ children }: OpenModalType) {
  const { openRegister, setOpenRegister } = useBooks();

  return (
    <div>
      <Modal
        open={openRegister}
        onClose={() => setOpenRegister(!openRegister)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
