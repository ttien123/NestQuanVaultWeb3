import { Link } from 'react-router-dom';
import { FC } from 'react';
import ProcessingIcon from 'src/assets/svg/ModalStepIcon/ProcessingIcon';
import SuccessfulIcon from 'src/assets/svg/ModalStepIcon/SuccessfulIcon';
import FailedIcon from 'src/assets/svg/ModalStepIcon/FailedIcon';
import AppModal from '../AppModal/AppModal';

export enum MODAL_STEP {
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    READY = 'READY',
}

const SuccessContent: FC<{ content?: string; link: string }> = ({ content, link }) => {
    return (
        <div className={`modal-success flex items-center justify-center gap-4 flex-col`}>
            <div className="logo">
                <SuccessfulIcon />
            </div>
            <div className="text-white font-medium">{content || 'Transaction successfully!'}</div>

            <div className="flex items-center justify-center">
                <Link
                    to={link}
                    target="_blank"
                    className="text-[16px] rounded-xl text-white font-semibold bg-primary_1 py-2 px-4 max-w-[160px]"
                >
                    View on scan
                </Link>
            </div>
        </div>
    );
};

const FailedContent: FC<{ content?: string }> = ({ content }) => {
    return (
        <div className={`modal-failed flex items-center justify-center gap-4 flex-col`}>
            <div className="logo">
                <FailedIcon />
            </div>
            <div className="text-white font-medium">{content || 'Transaction failed!'}</div>
        </div>
    );
};

const ProcessingContent: FC<{ content?: string }> = ({ content }) => {
    return (
        <div className={`modal-processing flex items-center justify-center gap-4 flex-col`}>
            <div className="logo">
                <ProcessingIcon />
            </div>
            <div className="text-white font-medium">{content || 'Transaction processing...'}</div>
        </div>
    );
};

const ModalStep = ({
    open,
    onClose,
    link = '',
    showClose = false,
    closable = false,
    title = '',
    step,
    content = '',
}: {
    open: boolean;
    onClose?: () => void;
    link?: string;
    showClose?: boolean;
    closable?: boolean;
    title?: string;
    step: MODAL_STEP;
    content?: string;
}) => {
    return (
        <AppModal
            wrapClassName={'modal-step-wrapper'}
            title={title}
            open={open}
            maskClosable
            showCloseIcon={showClose}
            onClose={onClose}
            closable={closable}
            width={420}
            centered
        >
            {step === MODAL_STEP.PROCESSING && <ProcessingContent content={content} />}
            {step === MODAL_STEP.SUCCESS && <SuccessContent link={link} content={content} />}
            {step === MODAL_STEP.FAILED && <FailedContent content={content} />}
        </AppModal>
    );
};

export default ModalStep;
