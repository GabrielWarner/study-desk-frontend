
import Wrapper from "./calc-components/Wrapper";
import Screen from "./calc-components/Screen";
import ButtonBox from './calc-components/ButtonBox'
import Button from './calc-components/Button'
import CalcProvider from "./context/CalcContext";
import './index.css'


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Calculator() {
  return (
    <div className="CalcBody">
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    </div>
  );
}

export default Calculator;