import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import button from "../button.vue";

describe("test Button", () => {
  it("should render slot", () => {
    const wrapper = mount(button, {
      slots: {
        default: "Hello world",
      },
    });

    expect(wrapper.text()).toContain("Hello world");
  });
  it("should have class", () => {
    const wrapper = mount(button, {
      props: {
        type: "primary",
      },
    });
    expect(wrapper.classes()).toContain("ml-button--primary");
  });
});
