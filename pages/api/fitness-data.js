import { getFitnessData } from '@/lib/google';

const handler = async (_, res) => {
  try {
    const data = await getFitnessData();

    res.status(200).json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  }
};

export default handler;
