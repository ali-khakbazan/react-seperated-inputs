import "./seperated-inputs.css";
import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  KeyboardEvent,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { onlyNumber } from "../utils/onlyNumber";

type Props = {
  wrapperClassName?: string;
  inputClassname?: string;
  label?: string | ReactNode;
  keyProp: string;
  length: number;
  inputWidths?: string[] | "auto";
  valueLength: number[] | number;
  direction?: "rtl" | "ltr";
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
  labelStyle?: (styles: CSSProperties) => CSSProperties;
  inputStyle?: (styles: CSSProperties) => CSSProperties;
};

export const SeperatedInput: React.FC<Props> = ({
  wrapperClassName = "",
  inputClassname = "",
  label,
  length,
  keyProp,
  values,
  setValues,
  direction = "ltr",
  inputWidths = "auto",
  valueLength,
  inputStyle,
  labelStyle,
}) => {
  // MAIN LOGIC STARTS FROM HERE !

  const [fields, setFields] = useState<HTMLInputElement[]>([]);

  useEffect(() => {
    setFields(Array.from(document.querySelectorAll("input")));
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const position = fields.indexOf(e.target as HTMLInputElement);
      const valArr = [...values];
      const valLength = Array.isArray(valueLength)
        ? valueLength[index]
        : valueLength;
      const isLastInput = index + 1 === length;
      const regex = `\\d{${valLength}}(?=.)`;
      const seperatedValue = e.target.value.replace(
        new RegExp(regex, "g"),
        "$& "
      );
      const valueArray = seperatedValue.split(" ");

      if (isLastInput && e.target.value.length > valLength) {
        return e.preventDefault();
      }

      if (e.target.value.length > valLength && !Array.isArray(valLength)) {
        return setValues(valueArray);
      }

      valArr[index] = e.target.value;
      setValues(valArr);

      if (e.target.value.length >= valLength && !isLastInput) {
        fields?.[position + 1]?.focus();
      }
    },
    [fields, values, setValues, length, valueLength]
  );

  const handleBackSpace = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      const position = fields?.indexOf(e.target as HTMLInputElement);
      const isLastInput = index === length;
      const isFirstInput = index === 0;
      const pressedKey = e.code;
      const keyCode = e.which || e.charCode;

      const backKeys = ["ArrowLeft", "Delete"];
      const nextKeys = ["ArrowRight"];

      if (pressedKey === "Backspace" || keyCode === 8) {
        if (
          (values?.[index]?.length === 0 || !values?.[index]) &&
          !isFirstInput
        ) {
          fields?.[position - 1]?.focus();
        }
      }

      if (nextKeys.includes(pressedKey) && !isLastInput) {
        fields?.[position + 1]?.focus();
      }

      if (backKeys.includes(pressedKey) && !isFirstInput) {
        fields?.[position - 1]?.focus();
      }
    },
    [fields, values, length]
  );

  // UI HANDLERS STARTS FROM HERE !

  const inputStyleDetail = useMemo(() => {
    const defaultStyles: CSSProperties = {
      direction: direction,
      width: "100%",
      height: "30px",
      backgroundColor: "transparent",
      padding: "0.5rem",
      margin: "0",
      border: "1px solid #ccc",
      outline: "none",
      borderRadius: "0.5rem",
      textAlign: "center",
    };

    if (inputStyle) {
      return inputStyle(defaultStyles);
    }

    return defaultStyles;
  }, [inputStyle, direction]);

  const labelStyleDetail = useMemo(() => {
    const defaultStyles: CSSProperties = {
      display: "block",
      marginBottom: "0.5rem",
      color: "#596275",
    };

    if (labelStyle) {
      return labelStyle(defaultStyles);
    }

    return defaultStyles;
  }, [labelStyle]);

  return (
    <div className={wrapperClassName}>
      <div className="full-width">
        <label style={labelStyleDetail}>{label}</label>

        <div
          style={{ direction: direction }}
          className={`flex small-x-gap items-center`}
        >
          {Array.from({ length: length }, (_, idx) => {
            return (
              <div
                style={{ width: inputWidths?.[idx] }}
                key={`${keyProp}-${idx}`}
              >
                <input
                  style={inputStyleDetail}
                  value={values[idx]}
                  onKeyDown={(e) => handleBackSpace(e, idx)}
                  onKeyPress={onlyNumber}
                  onChange={(e) => handleChange(e, idx)}
                  inputMode="decimal"
                  className={"input-focus " + inputClassname}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
