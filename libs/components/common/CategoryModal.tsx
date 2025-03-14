import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 480,  
  bgcolor: 'background.paper',
  border: '2px solid rgba(0,0,0, 0.09)',
  boxShadow: 24,
  borderRadius: "5px",
  p: 2,

  
};

interface ModalProps {
    open: boolean;
    modalOpen: () => void;
    modalClose: () => void
}

const CatalogImages = [
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"},
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"},
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"},
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"},
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"},
    {url: "/img/property/chair.jpg", alt: "ImageCatalog"}
]
const CatalogText = [
   "Chair",
   "Tables",
   "Dining Table",
   "Drawers",
   "Sofa-Bed",
   "Wardrobe",
];

export default function CategoryModal({ open, modalOpen, modalClose }: ModalProps) {
    return (
      <div className="modal-category">
        <Button className={"category-btn"} onClick={modalOpen} sx={{ border: "1px solid rgba(0, 0, 0, 0.09 )" }}>
          <FormatListBulletedIcon sx={{ width: "20px", marginRight: 1 }} />
          Shop by Category
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={modalClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Stack sx={style}>
              <span className="modal-title" style={{fontSize: "28px", paddingBottom: "15px",  color: "rgba(0,0,0, 0.7)"}}>
                Category
              </span>
              <Stack className="category-card" 
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                columnGap: "40px",
                rowGap: "25px",
                paddingTop: "10px",
              }}>
                {CatalogImages.map(({ url, alt }, index) => (
                  <Stack key={index} 
                  sx={{ 
                    alignItems: "center",
                    width: "200px",
                    textAlign: "center",
                    transition: "all 0.3s ease-in",
                    "&:hover": {
                        borderRadius: "30px",
                         boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.3)",
                         transform: "scale(1.06)"
                     }
                    }}>
                    <img src={url} style={{ width: "180px", height: "150px", display: "block", objectFit: "cover", paddingTop: "5px", borderRadius: "45px", cursor: "pointer"}} alt={alt} />
                    <Typography variant="body1" sx={{fontSize: "16px", fontWeight: "500"}}>{CatalogText[index]}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Fade>
        </Modal>
      </div>
    );
  }
  
