import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import {
  Connection,
  PublicKey,
  Keypair,
  TransactionMessage,
  TransactionSignature,
  VersionedTransaction,
  SystemProgram,
  LAMPORTS_PER_SOL
} from '@solana/web3.js';

const SENDER_SECRET_KEY = process.env.SOLANA_SECRET_KEY 
    ? new Uint8Array(process.env.SOLANA_SECRET_KEY.split(',').map(Number)) 
    : new Uint8Array([]);

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {

    try {
      const { recipientAddress, amount } = await req.json();
      
      try {
        new PublicKey(recipientAddress);
      } catch (error) {
        return new NextResponse(JSON.stringify({ success: false, error: (error as Error).message as string }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      
      const senderKeypair = Keypair.fromSecretKey(SENDER_SECRET_KEY);
      const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    } catch (error) {
      console.log("Error: ", error)
      return new NextResponse(JSON.stringify({ success: false, error: (error as Error).message as string }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new NextResponse('Method Not Allowed', {
      status: 405,
      headers: {
        'Allow': 'POST',
      },
    });
  }
}
