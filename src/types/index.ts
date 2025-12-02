import React from 'react';

export interface CleaningStat {
    label: string;
    value: string;
    unit: string;
    icon: React.ReactNode;
}

export enum CleaningMode {
    TRADITIONAL = 'TRADITIONAL',
    MOLECULAR = 'MOLECULAR'
}

export interface SimulationParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    type: 'water' | 'dirt' | 'bubble';
    velocity: number;
}
