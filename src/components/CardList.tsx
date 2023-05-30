import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ObjectData } from "../redux/actions";

interface RootState {
    objects: ObjectData[];
}

export default function CardList() {
    const objects = useSelector((state: RootState) => state.objects);
    return (
        <>
            {objects.map((item) =>
                <Link to={`/edit/${item.id}`} style={{ color: "black", textDecoration: "none" }}>
                    <Card
                        key={item.id}
                        type={item.type}
                        group={item.group}
                        description={item.description}
                        summary={item.summary}
                        width={item.width}
                        height={item.height}
                        rate={item.rate}
                        unit={item.unit}>
                    </Card>
                </Link>
            )
            }
        </>
    )
}
