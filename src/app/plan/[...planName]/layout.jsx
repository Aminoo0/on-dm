import { plans } from '@/data/plans';


export async function generateMetadata({ params }) {

    let plan = plans.filter((term) => term.url == params.planName[0])
    console.log(params.planName[0]);
    console.log(plan[0].name);

    return {
        title: plan[0].name,
        description: plan[0].disc
    }

}

export default function ABoutUsLayout({ children }) {
    return (<section>
        <div className='mt-[75px] lg:mt-[88px]'>
            {children}
        </div>
    </section>
    );
}
