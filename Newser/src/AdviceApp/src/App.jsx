import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import ButtonsContainer from "./components/ButtonsContainer";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [click, setClick] = useState(false);
  const [save, setSave] = useState([]);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [uniqueSave, setUniqueSave] = useState([]);
  let uniqueSaves = [];

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const newAdvice = response.data.slip.advice;
      setAdvice((prevAdvice) => [newAdvice, ...prevAdvice]);
      setCurrentIndex(0);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
    setClick(false);
  }, [fetchAdvice, click]);

  const showAdvice = () => {
    setClick(true);
    console.log(advice.length);
  };

  const previous = () => {
    if (currentIndex < advice.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const saveAdvice = () => {
    const currentAdvice = advice[currentIndex];
    setSave((prevSave) => [currentAdvice, ...prevSave]);
    console.log(save);
  };

  const showSaved = () => {
    uniqueSaves = save.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    setUniqueSave(uniqueSaves);
    setShowSavedModal(true);
  };

  const hideSavedModal = () => {
    setShowSavedModal(false);
  };

  return (
    <>
      <div className="container">
        <p className="advice">{advice[currentIndex]}</p>
        <ButtonsContainer
          previous={previous}
          showAdvice={showAdvice}
          saveAdvice={saveAdvice}
          showSaved={showSaved}
        />
      </div>
      {showSavedModal && (
        <SavedAdviceModal>
          <SavedAdviceContent>
            <h2>Saved Advice</h2>
            {uniqueSave.length > 0 ? (
              uniqueSave.map((saved, index) => <li key={index}>{saved}</li>)
            ) : (
              <p>Saved advices will appear here</p>
            )}
            <CloseButton onClick={hideSavedModal}>Close</CloseButton>
          </SavedAdviceContent>
        </SavedAdviceModal>
      )}
    </>
  );
}

export default App;

const SavedAdviceModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const SavedAdviceContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const CloseButton = styled.button`
  /* background-color: rgb(180, 226, 245);
   */
  background-color: rgb(233, 245, 126);
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #e9d149;
    /* background-color: #7272f5; */
  }
`;
