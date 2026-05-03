import { Modal, Button, Input, TextField, Label, Form } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import Image from "next/image";
import { Rocket } from "lucide-react";

export default function UserUpdateModal() {

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        // console.log({image,name})

        await authClient.updateUser({
            name,
            image
        })
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <Modal>
                <Button variant="secondary">Update</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Rocket className="size-5" />
                                </Modal.Icon>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={onSubmit} className="space-y-6 p-4">
                                    <div className="flex flex-col items-center gap-4">
                                        <h1 className='text-lg font-medium'>Update your profile</h1>
                                    </div>

                                    <div className="space-y-5">
                                        <TextField fullWidth name="name">
                                            <Label className="text-surface-alt text-xs uppercase tracking-wider">Full Name</Label>
                                            <Input
                                                type='text'
                                                placeholder="Enter your name"
                                            />
                                        </TextField>

                                        <TextField fullWidth name="image">
                                            <Label className="text-surface-alt text-xs uppercase tracking-wider">Image URL</Label>
                                            <Input
                                                type='text'
                                                placeholder="https://example.com/avatar.jpg"
                                            />
                                        </TextField>
                                    </div>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit" className="bg-accent text-white">Update</Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}