from vllm import LLM, SamplingParams
from transformers import AutoTokenizer

model_id = "neuralmagic/Llama-3.2-3B-Instruct-FP8"
number_gpus = 1
max_model_len = 4096

sampling_params = SamplingParams(temperature=0.6, top_p=0.9, max_tokens=512)

tokenizer = AutoTokenizer.from_pretrained(model_id)

def run(messages={}):
    prompts = tokenizer.apply_chat_template(messages, add_generation_prompt=True, tokenize=False)

    llm = LLM(model=model_id, tensor_parallel_size=number_gpus, max_model_len=max_model_len)

    outputs = llm.generate(prompts, sampling_params)

    generated_text = outputs[0].outputs[0].text
    print(generated_text)

    messages = [
        {"role": "system", "content": "You are a pirate chatbot who always responds in pirate speak!"},
        {"role": "user", "content": "Who are you?"},
    ]