import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Slider } from '../ui/slider';

type dialogProps = {
  max: number;
  setMax: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  onClose: () => void;
};
export const NewGameDialog: React.FC<dialogProps> = ({
  max,
  setMax,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:min-w-[425px]'>
        <DialogHeader>
          <DialogTitle>New Game</DialogTitle>
        </DialogHeader>
        <div className='w-full flex flex-row justify-start items-center'>
          <div className='w-[80%]'>
            <Label htmlFor='name' className='text-right mb-2'>
              Countries per Game
            </Label>
            <Slider
              max={50}
              step={1}
              value={[max]}
              className='w-full pt-2'
              onValueChange={(values) => setMax(values[0])}
            />
          </div>
          <div>
            <span className='ml-4'>{max}</span>
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' onClick={onClose}>
            Start
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

type resultDialogProps = {
  result: number;
  open: boolean;
  onClose: () => void;
};
export const ResultDialog: React.FC<resultDialogProps> = ({
  result,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:min-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Result</DialogTitle>
        </DialogHeader>
        <div className='flex items-center gap-4'>
          <p className='text-[10em] font-bold text-center w-full'>{result}%</p>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
