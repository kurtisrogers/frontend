import { Dynamic, For, Show } from "solid-js/web";
import { JSX } from "solid-js";
import type { InputTypes } from "@/types/forms";
import type { Heading } from "@/types/branding";
import "./style.css";

type Inputs = {
  name: string;
  type: InputTypes;
};

type FormConfig = {
  name: string;
  autocomplete?: "on" | "off";
  action?: string;
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  method: "post" | "get" | "dialog";
  novalidate?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
};

interface Props {
  title?: Heading;
  byline?: string;
  formConfig: FormConfig;
  inputs: Inputs[];
}

interface FormInputLabelWrapperProps {
  children: JSX.Element;
  type: string;
  name: string;
}

const elementLabelExclusionList = ["button", "reset", "hidden", "submit"];

export const FormInputLabelWrapper = ({ children, type, name }: FormInputLabelWrapperProps) => {
  if (elementLabelExclusionList.includes(type)) {
    return children;
  } else {
    return <label for={name}>{children}</label>;
  }
};

export default function Form({ title, byline, inputs, formConfig }: Props) {
  return (
    <form {...formConfig}>
      <Show when={title}>
        <hgroup>
          <Dynamic
            component={`h${typeof title === "string" ? "1" : title?.headingLevel}`}
            class={typeof title === "string" ? "text-size-h1" : title?.headingClass}
          >
            {typeof title === "string" ? title : title?.text}
            <Show when={byline}>
              <p>{byline}</p>
            </Show>
          </Dynamic>
        </hgroup>
      </Show>
      <For each={inputs}>
        {item => {
          return (
            <FormInputLabelWrapper type={item.type} name={item.name}>
              <input type={item.type} name={item.name} />
            </FormInputLabelWrapper>
          );
        }}
      </For>
    </form>
  );
}
