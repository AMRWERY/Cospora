
const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;

const loginSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
  {
    $formkit: "password",
    name: "password",
    label: "forms.password",
    validation: "required|password|length:6,7",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-[500px]",
  },
];

const registrationSchema = [
  {
    $formkit: "form",
    onSubmit: "$signUp",
    actions: false,
    // $el: "h2",
    // attrs: {
    //   class: 'my-3 text-2xl font-bold tracking-tight text-gray-900 text-start'
    // },
    // children: "Create Account",
    children: [
      {
        $formkit: "text",
        name: "firstName",
        label: "forms.first_name",
        validation: "required|contains_numeric|length:3,10",
        outerClass:
          "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
        innerClass: "outline-none bg-gray-50 border w-[400px]",
        suffixIcon: 'material-symbols:contact-emergency-outline'
      },
      {
        $formkit: "text",
        name: "lastName",
        label: "forms.last_name",
        validation: "required|contains_numeric|length:3,10",
        outerClass:
          "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
        innerClass: "outline-none bg-gray-50 border w-[400px]",
      },
      {
        $formkit: "email",
        name: "email",
        label: "forms.email_address",
        validation: "required|email|ends_with:.com",
        outerClass:
          "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
        innerClass: "outline-none bg-gray-50 border w-[400px]",
      },
      {
        $formkit: "password",
        name: "password",
        label: "forms.password",
        validation: "required|password|length:6,7",
        outerClass:
          "relative py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
        innerClass: "outline-none bg-gray-50 border w-[400px] pr-10",
      },
      {
        $el: "button",
        attrs: {
          class:
            "block w-[400px] px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white",
        },
        children: "Create an Account",
      },
    ],
  },
];

const resetPasswordSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "px-2 py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
];

const contactUsSchema = [
  {
    $formkit: "email",
    name: "email",
    label: "forms.email_address",
    validation: "required|email|ends_with:.com",
    outerClass:
      "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
    onKeydown: (event) => {
      if (arabicRegex.test(event.key)) {
        event.preventDefault();
      }
    },
    onInput: (event) => {
      if (event?.target) {
        event.target.value = event.target.value.replace(arabicRegex, "");
      }
    },
  },
  {
    $formkit: "textarea",
    name: "textarea",
    label: "forms.message",
    validation: "required|length:0,120",
    outerClass:
      "py-2 text-gray-800 transition duration-100 rounded ring-indigo-300 focus:ring",
    innerClass: "outline-none bg-gray-50 border w-full",
  },
];

export {
  loginSchema,
  registrationSchema,
  resetPasswordSchema,
  contactUsSchema,
};
