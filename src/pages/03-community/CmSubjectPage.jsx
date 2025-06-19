import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CmNewPost from "../../component/03-community/post/CmNewPost";
import { Box } from "@mui/material"; 
import CmSubject from "../../component/03-community/cmSubject";
import "../../styles/03-community/cmSubjectPage.scss";

function CmSubjectPage() {
  const methods = useForm(); 

  return (
    <FormProvider {...methods}>
      <>
        <Box style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          <CmNewPost />
          <CmSubject />
        </Box>
      </>
    </FormProvider>
  );
}

export default CmSubjectPage;