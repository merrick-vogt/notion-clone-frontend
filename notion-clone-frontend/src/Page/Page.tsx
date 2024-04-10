import { useFocusedNodeIndex } from './useFocusedNodeIndex';
import { Cover } from './Cover';
import { Spacer } from './Spacer';
import { BasicNode } from '../Node/BasicNode';
import { Title } from './Title';
import { nanoid } from 'nanoid';
import { useAppState } from '../state/AppStateContext';

export const Page = () => {
    const {title, nodes, addNode, setTitle} = useAppState();

    const [focusedNodeIndex, setFocusedNodeIndex] = useFocusedNodeIndex({nodes});

    return (
        <>
            <Cover />
            <div>
                <Title addNode={addNode} title={title} changePageTitle={setTitle} />

                {nodes.map((node, index) => (
                    <BasicNode
                        key={node.id}
                        node={node}
                        updateFocusedIndex={setFocusedNodeIndex}
                        isFocused={focusedNodeIndex === index}
                        index={index}
                    />
                ))}

                <Spacer
                    handleClick={() => {
                        addNode({ type: "text", id: nanoid(), value: "" }, nodes.length);
                        setFocusedNodeIndex(nodes.length);
                    }} 
                    showHint={!nodes.length}
                />
            </div>
        </>
    )
}