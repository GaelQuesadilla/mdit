import storageModel from "../resources/models/storage";
import fileModel from "../resources/models/file";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TextInput from "../components/edition/TextInput";
import TextView from "../components/edition/TextView";
import { CircleBotton } from "../components/global/Buttons";
import { FloatContainer } from "../components/global/FloatContainer";
import { FaSave, FaEye, FaTrash } from "react-icons/fa";
import { FormButton, FormText, Form } from "../components/forms/Form";
import Modal from "../components/modal/Modal";
import { Navigate } from "react-router-dom";
import { path } from "../resources/data";

const DocView = () => {
  const [editable, setEditable] = useState(true);
  const [content, setContent] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { fileName } = useParams();
  const storage = new storageModel();
  const file = new fileModel(fileName, storage);
  useEffect(() => {
    setContent(file.getFile().content);

    return () => {};
  }, [,]);

  return (
    <div id="app">
      {shouldRedirect ? (
        <Navigate
          replace
          to={path.filter((el) => el.name === "Home")[0].href}
        ></Navigate>
      ) : null}
      <header>
        <h1>{fileName}</h1>
      </header>

      {editable ? (
        <TextInput {...{ content, setContent }} />
      ) : (
        <TextView {...{ content }} />
      )}

      <FloatContainer>
        <CircleBotton
          style={{ backgroundColor: "#a04050" }}
          onClick={() => setDisplayModal(true)}
        >
          <FaTrash />
        </CircleBotton>
        <CircleBotton
          style={{ backgroundColor: "#50c040" }}
          onClick={() => {
            file.updateFile({ content });
            file.saveFile();
          }}
        >
          <FaSave />
        </CircleBotton>
        <CircleBotton
          style={{ backgroundColor: "#3070a0" }}
          onClick={() => setEditable((state) => !state)}
        >
          <FaEye />
        </CircleBotton>
      </FloatContainer>

      {displayModal ? (
        <Modal>
          <p>Are you sure you want to delete this file?</p>
          <Form
            submitValue="Cancel"
            onSubmit={(ref) => {
              setDisplayModal(false);
            }}
          >
            <FormButton
              name="Delete"
              value="Delete"
              onClick={() => {
                setDisplayModal(false);
                storage.updateStorage((values)=>{
                  values.documents = values.documents.filter((doc)=>doc.name!==fileName)
                  return values
                })
                setShouldRedirect(true);
              }}
            />
          </Form>
        </Modal>
      ) : null}
    </div>
  );
};

export default DocView;
