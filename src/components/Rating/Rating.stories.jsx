import Rating from "./Rating";

export default {
  title: "Example/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
  number: 5,
};
