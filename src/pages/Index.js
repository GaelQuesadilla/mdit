import CardContainer from "../components/filecard/CardContainer";
import FileCard from "../components/filecard/FileCard";
import { useEffect } from "react";
import { useState } from "react";
import { CircleBotton } from "../components/global/Buttons";
import { FloatContainer } from "../components/global/FloatContainer";
import Modal from "../components/modal/Modal";
import { Form, FormText, FormButton } from "../components/forms/Form";

import storageModel from "../resources/models/storage";
import { FaPlus, FaEye} from "react-icons/fa";
const Index = () => {
  const [fileList, setFileList] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const storage = new storageModel();

  useEffect(() => {
    const fileList = storage.getStorage().documents.map((el) => el.name);
    setFileList(fileList);
    return () => {};
  }, [displayModal]);

  return (
    <>
      <header>
        <h1>Welcome</h1>
      </header>

      <CardContainer>
        {fileList.map((fileName, index) => (
          <FileCard key={index} fileName={fileName} />
        ))}
      </CardContainer>

      <FloatContainer>
        <CircleBotton
          style={{ backgroundColor: "#50c040" }}
          onClick={() => setDisplayModal(true)}
        >
          <FaPlus />
        </CircleBotton>
      </FloatContainer>

      {displayModal ? (
        <Modal>
          <Form
            submitValue="Create"
            onSubmit={(ref) => {
              const fileName = ref.current[0].value;
              const documents = storage.getStorage().documents;
              const index = documents.findIndex(
                (document) => document.name === fileName
              );
              if (!(index === -1)) {
                alert(`${fileName} file already exist`);
              }
              if (fileName === "") {
                alert("Set a valid name");
              }
              storage.updateStorage((values) => {
                values.documents.push({ name: fileName, content: "" });
                return values;
              });

              setDisplayModal(false);
            }}
          >
            <FormText name="fname" labelText="New file name" />
            <FormButton
              name="Cancel"
              value="Cancel"
              onClick={() => setDisplayModal(false)}
            />
          </Form>
        </Modal>
      ) : null}
    </>
  );
};

export default Index;
