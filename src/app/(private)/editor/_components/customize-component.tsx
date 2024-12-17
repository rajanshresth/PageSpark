import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CustomizeComponents = () => {
  return (
    <>
      <div className='w-80 bg-white rounded-lg p-4'>
        <div className='flex flex-row items-center justify-between pb-2 border-b'>
          <h3 className='font-medium text-lg'>Button 1</h3>
          <button className='text-gray-400 hover:text-gray-500'>•••</button>
        </div>

        <div className='space-y-6 pt-4'>
          {/* Basic Section */}
          <div className='space-y-4'>
            <h4 className='font-medium'>Basic</h4>

            <div className='space-y-2'>
              <Label>Label</Label>
              <Input defaultValue='Get Started' />
            </div>

            <div className='space-y-2'>
              <Label>Type</Label>
              <ToggleGroup
                type='single'
                defaultValue='primary'
                className='w-full'
              >
                <ToggleGroupItem
                  value='primary'
                  className='w-1/2 rounded-l-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Primary
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='secondary'
                  className='w-1/2 rounded-r-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Secondary
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className='space-y-2'>
              <Label>Size</Label>
              <ToggleGroup
                type='single'
                defaultValue='large'
                className='w-full'
              >
                <ToggleGroupItem
                  value='small'
                  className='w-1/2 rounded-l-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Small
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='large'
                  className='w-1/2 rounded-r-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Large
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className='space-y-2'>
              <Label>Button Type</Label>
              <ToggleGroup
                type='single'
                defaultValue='default'
                className='w-full'
              >
                <ToggleGroupItem
                  value='default'
                  className='w-1/2 rounded-l-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Default
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='submit'
                  className='w-1/2 rounded-r-md data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
                >
                  Submit
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className='space-y-2'>
              <Label>Click</Label>
              <Input defaultValue='getInvoices.trigger()' />
            </div>

            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <Label>Loading</Label>
                <Switch />
              </div>
              <div className='flex items-center justify-between'>
                <Label>Disabled</Label>
                <Switch />
              </div>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className='space-y-4'>
            <h4 className='font-medium'>Add-ons</h4>
            <div className='space-y-2'>
              <Label>Prefix</Label>
              <Input placeholder='Select an Icon' />
            </div>
            <div className='space-y-2'>
              <Label>Suffix</Label>
              <Input placeholder='Select an Icon' />
            </div>
          </div>

          {/* Layout Section */}
          <div className='space-y-4'>
            <h4 className='font-medium'>Layout</h4>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <Label>Hidden</Label>
                <Switch />
              </div>
              <div className='flex items-center justify-between'>
                <Label>Styles</Label>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeComponents;
