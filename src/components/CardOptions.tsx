import { ReactNode } from 'react';
import { Card, CardTitle, CardContent } from "./Card";
import Button from "./Button";
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type CardOptionsProps = {
  title: string;
  content: string;
  buttonText: string;
  logo: ReactNode;
};

const CardOptions: React.FC<CardOptionsProps> = ({ title, content, buttonText, logo }) => {
  return (
    <Card className="flex-col p-4 w-96 relative min-h-64 h-80">
      <div className="mx-auto mt-5">{logo}</div>
      <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
      <CardContent className="mt-3 pt-3  flex-col md:flex-row md:space-x-4 text-center text-pretty">
        <p>{content}</p>
      </CardContent>
      <div className="absolute bottom-6 left-0 right-0 px-20 " >
        <Button id="go-to-assesment" theme="primary">
          <div className="flex">
            <p>{buttonText}</p>
            <ChevronRightIcon className="h-6 self-center" />
          </div>
        </Button>
      </div>
    </Card>
  );
};

export default CardOptions;