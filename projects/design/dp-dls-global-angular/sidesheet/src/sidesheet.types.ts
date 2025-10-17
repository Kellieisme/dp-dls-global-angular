export type AtmosphereSidesheetVariant = ('standard' | 'modal');

export type AtmosphereSidesheetContentMode = ('side' | 'over' | 'push');

export type AtmosphereSidesheetButton = { 
    text: string; 
    onClick: () => void; 
    buttonType?: 'text' | 'stroked' | 'flat'
}
export type AtmosphereSidesheetButtonsArray = AtmosphereSidesheetButton[]