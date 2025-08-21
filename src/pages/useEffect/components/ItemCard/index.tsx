import { Card, CardContent, CustomerName, CustomerDetails } from './styles';

export type Item = {
    id: string;
    name?: string;
    email?: string;
    title?: string;
    body?: string;
};

type Props = {
    item: Item;
};

export const ItemCard = ({ item }: Props) => {
    return (
        <Card>
            <CardContent>
                <CustomerName>{item.name || item.title}</CustomerName>
                <CustomerDetails>
                    <p>{item.email || item.body}</p>
                </CustomerDetails>
            </CardContent>
        </Card>
    );
};
