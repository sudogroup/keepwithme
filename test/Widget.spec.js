import { mount } from "@vue/test-utils";
import Widget from "@/components/Widget/index.vue";

describe("Widget", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Widget);
    expect(wrapper.vm).toBeTruthy();
  });
});
