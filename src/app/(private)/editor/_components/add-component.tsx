import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  Table2,
  Type,
  FormInput,
  List,
  BarChart3,
  Image as ImageIcon,
  Navigation,
  BookOpenCheck,
  Heading1,
} from "lucide-react";

const commonlyUsedComponents = [
  { name: "header", icon: <Heading1 className='h-5 w-5 text-gray-600' /> },
  { name: "Table", icon: <Table2 className='h-5 w-5 text-gray-600' /> },
  { name: "Text", icon: <Type className='h-5 w-5 text-gray-600' /> },
  {
    name: "Button",
    icon: (
      <Button
        size='sm'
        variant='secondary'
        className='bg-orange-400 text-white hover:bg-orange-600 rounded-full'
      >
        Action
      </Button>
    ),
  },
  { name: "Input", icon: <FormInput className='h-5 w-5 text-gray-600' /> },
  { name: "Form", icon: <BookOpenCheck className='h-5 w-5 text-gray-600' /> },
  { name: "Select", icon: <List className='h-5 w-5 text-gray-600' /> },

  { name: "Chart", icon: <BarChart3 className='h-5 w-5 text-gray-600' /> },
  { name: "Image", icon: <ImageIcon className='h-5 w-5 text-gray-600' /> },
  {
    name: "Navigation",
    icon: <Navigation className='h-5 w-5 text-gray-600' />,
  },
];

const textInputComponents = [
  { name: "Editable", icon: <FormInput className='h-5 w-5 text-gray-600' /> },
  { name: "JSON", icon: <FormInput className='h-5 w-5 text-gray-600' /> },
];

const ComponentSection = ({
  title,
  components,
}: {
  title: string;
  components: any;
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className='space-y-2'>
      <div className='flex items-center justify-between space-x-4 px-1 py-2'>
        <h4 className='text-sm font-semibold text-gray-700'>{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='sm' className='p-0 h-auto'>
            <ChevronDown className='h-4 w-4' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className='grid grid-cols-3 gap-2 px-1'>
          {components.map((component: any) => (
            <div
              key={component.name}
              className='flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
            >
              <div className='mb-1'>{component.icon}</div>
              <span className='text-xs text-gray-600'>{component.name}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const AddComponents = () => {
  return (
    <Tabs defaultValue='components' className='w-full'>
      <TabsList className='grid w-full grid-cols-2 rounded-full bg-gray-100 p-1'>
        <TabsTrigger
          value='components'
          className='rounded-full data-[state=active]:bg-white'
        >
          Components
        </TabsTrigger>
        <TabsTrigger
          value='modules'
          className='rounded-full data-[state=active]:bg-white'
        >
          Modules
        </TabsTrigger>
      </TabsList>
      <TabsContent value='components' className='mt-4'>
        <ComponentSection
          title='Commonly used'
          components={commonlyUsedComponents}
        />
        <ComponentSection
          title='Text Inputs'
          components={textInputComponents}
        />
      </TabsContent>
      <TabsContent value='modules'></TabsContent>
    </Tabs>
  );
};

export default AddComponents;
