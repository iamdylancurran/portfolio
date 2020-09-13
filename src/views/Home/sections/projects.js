import React, { useState } from 'react';
import { Header } from '../../../components/typography/Typography';
import Modal from '../../../components/misc/Modal';

const Projects = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        el={Projects}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        text="Breh"
      />
      <Header color="textPrimary" align="center">
        Projects
      </Header>
      <button type="button" onClick={handleOpen}>
        hey
      </button>
    </div>
  );
};

export default Projects;
