import { FC, Fragment, PropsWithChildren } from 'react';
import { Modal, ModalProps, Typography } from 'antd';
import CloseIcon from 'src/assets/svg/CloseIcon';
const { Title } = Typography;

const AppModal: FC<
    PropsWithChildren<
        ModalProps & {
            title?: any;
            onClose?: any;
            showCloseIcon?: boolean;
            width?: number | string;
            maskClosable?: boolean;
            wrapClassName?: string;
            classNameTitle?: string;
            classNameIconClose?: string;
            destroyOnClose?: boolean;
        }
    >
> = ({
    children,
    title,
    onClose,
    showCloseIcon = true,
    width,
    wrapClassName,
    classNameIconClose,
    classNameTitle,
    destroyOnClose = true,
    maskClosable = true,
    ...props
}) => {
    return (
        <Modal
            footer={null}
            wrapClassName={wrapClassName}
            closable={false}
            width={width ?? 565}
            destroyOnClose={destroyOnClose}
            onCancel={onClose}
            maskClosable={maskClosable || !showCloseIcon}
            {...props}
            getContainer={() => document.getElementById('root') as HTMLElement}
        >
            <Fragment>
                {showCloseIcon && <CloseIcon onClick={onClose} className={classNameIconClose} />}
                <>
                    <Title level={2} className={classNameTitle}>
                        {title}
                    </Title>
                    {children}
                </>
            </Fragment>
        </Modal>
    );
};

export default AppModal;
