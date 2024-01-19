import Foo from "./Foo";

export default {
  title: "Foo",
};

export const Primary = () => <Foo color="blue" />;

export const Secondary = () => <Foo color="red" />;

export const Tertiary = () => <Foo color="green" />;
